import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.HTTP;
import org.json.JSONException;
import org.json.JSONObject;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import mesh.Mesh;
import turn.City;
import turn.Construcoes;
import turn.Financeiro;
import turn.Zonas;

//@WebServlet("/turn")
public class Turn extends HttpServlet {
	private static final long serialVersionUID = 1L;
	City city = new City(100,100,100,10000);
		
	@Override
	  protected void doOptions(HttpServletRequest req, HttpServletResponse resp)
	          throws ServletException, IOException {
	      setAccessControlHeaders(resp);
	      resp.setStatus(HttpServletResponse.SC_OK);
	}
	
	private void setAccessControlHeaders(HttpServletResponse resp) {		
		resp.setHeader("Access-Control-Allow-Origin", "*");
		resp.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
		resp.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		city = new City(100,100,100,10000);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			response.addHeader( "Access-Control-Allow-Origin", "*" ); 
			response.addHeader( "Access-Control-Allow-Methods", "POST" );
			
			
			
			String json_s = request.getReader().readLine();
			System.out.println(json_s);
			//FINANCEIRO
			Financeiro financeiro = new Financeiro();
			financeiro.cobrarImposto(city);
			financeiro.pagarManutencao(city);
			
			//VERIFICAR CONSTRUCOES
			Construcoes construcoes = new Construcoes();			
			String construcoes_out = construcoes.verify_obras_concluidas(json_s, city.getDate_turn(), city, city.getEdificios());
			
		    //VERIFICAR ZONAS
			Zonas zonas = new Zonas();
			String comercial_out = zonas.verify_comercial_zones(city, json_s, city.getDate_turn());
			String residencial_out = zonas.verify_residencial_zones(city, json_s, city.getDate_turn());
			
			String output_json = "{\"time\":"+city.getDate_turn().getTime()+",\"construcoes\":"+construcoes_out+",\"comercial\":"+comercial_out+",\"residencial\":"+residencial_out+"}";			
			System.out.println(output_json);

		    //PASSAR TURNO
		    city.proximo_dia();
		    
		    //ENVIAR JSON
		    response.setCharacterEncoding("UTF-8");
	        PrintWriter out = response.getWriter();
	        out.print(output_json);
	     	out.flush();
		} catch (JSONException e) {
			e.printStackTrace();
		}		
	}
}


