package turn;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONString;
import java.util.Random;

import com.google.gson.Gson;
import com.sun.jmx.snmp.Timestamp;

import mesh.Mesh;

public class Construcoes {
	public static void main (String[] args) throws ParseException {
//		JSONObject obj = new JSONObject(JsonTeste);
////		System.out.println(obj.getJSONObject("size").get("x"));
//		
//		//SIZE
//		int size_x = Integer.parseInt(obj.getJSONObject("size").get("x").toString());
//		int size_y = Integer.parseInt(obj.getJSONObject("size").get("y").toString());
//		
//		//DATA
//		JSONArray data = obj.getJSONArray("data");
//		System.out.println(data.getJSONArray(1).getJSONObject(2).getJSONObject("mesh").opt("finaliza_obra"));
//
//		//OUTPUT
//		ArrayList<String> addMesh_output = new ArrayList<String>();
//		addMesh_output.add("{\"x\":0,\"y\":0,\"data\":{\"graphic\":\"graphic/mesh/casa1.png\",\"nome\":\"\",\"tipo\":\"casa1\",\"energia\":0,\"agua\":0,\"habitantes\":0,\"max_habitantes\":0}}");
//		addMesh_output.add("{\"x\":0,\"y\":0,\"data\":{\"graphic\":\"graphic/mesh/casa1.png\",\"nome\":\"\",\"tipo\":\"casa1\",\"energia\":0,\"agua\":0,\"habitantes\":0,\"max_habitantes\":0}}");
//		String json = new Gson().toJson(addMesh_output);
//		System.out.println(json);	
//		
		
		Date date_turn = new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01");		
//		String output = verify_obras_concluidas(json_s,date_turn);
		System.out.println(String.valueOf(date_turn.getTime()));
//		System.out.println(output);
	}
	
	public static String select_comercio() {
		Random random = new Random();
		int n = random.nextInt(2) + 1;
		return "graphic/mesh/predio_comercial"+n+".png";
	}
	
	public static String verify_obras_concluidas(String json_s, Date date_turn, City city, ArrayList<Mesh> instance) throws JSONException {
		ArrayList<String> addMesh_output = new ArrayList<String>();
		
		JSONObject json = new JSONObject(json_s);
		json.getJSONObject("size");
		
		//SIZE
		int size_x = Integer.parseInt(json.getJSONObject("size").get("x").toString());
		int size_y = Integer.parseInt(json.getJSONObject("size").get("y").toString());
		//DATA
		JSONArray data = json.getJSONArray("data");
		
		for(int x=0;x<size_x;x++) {
			for(int y=0;y<size_y;y++) {
				JSONObject mesh = data.getJSONArray(y).getJSONObject(x).optJSONObject("mesh");
				if(mesh != null) {
					if(mesh.opt("finaliza_obra") != null){
						System.out.println(mesh.opt("finaliza_obra").toString()+" - "+String.valueOf(date_turn.getTime()).toString());
						long finalizar = Long.parseLong(mesh.opt("finaliza_obra").toString());
						long agora = Long.parseLong(String.valueOf(date_turn.getTime()).toString());
						System.out.println(agora>=finalizar);
						if(agora>=finalizar){
							if(mesh.opt("tipo").toString().equals("c_residencia")){
//								city.getEdificios().add()
								addMesh_output.add("{\"x\":"+x+",\"y\":"+y+",\"data\":{\"graphic\":\"graphic/mesh/casa1.png\",\"nome\":\"\",\"tipo\":\"casa1\",\"energia\":0,\"agua\":0,\"habitantes\":0,\"max_habitantes\":0}}");							
							}else if(mesh.opt("tipo").toString().equals("c_residencia2")) {
								addMesh_output.add("{\"x\":"+x+",\"y\":"+y+",\"data\":{\"graphic\":\"graphic/mesh/casa1.png\",\"nome\":\"\",\"tipo\":\"casa2\",\"energia\":0,\"agua\":0,\"habitantes\":0,\"max_habitantes\":0}}");
							}else if(mesh.opt("tipo").toString().equals("c_comercio")) {
								addMesh_output.add("{\"x\":"+x+",\"y\":"+y+",\"data\":{\"graphic\":\""+select_comercio()+"\",\"nome\":\"\",\"tipo\":\"comercio\",\"energia\":0,\"agua\":0,\"habitantes\":0,\"max_habitantes\":0}}");
							}
						}
					}
				}
			}
		}
		return new Gson().toJson(addMesh_output);
	}	
}