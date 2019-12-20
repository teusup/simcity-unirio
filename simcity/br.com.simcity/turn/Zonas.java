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

public class Zonas {
	
	public static boolean isZone(String tipo,JSONObject mesh) {
		if(mesh.opt("tipo")!=null) {
			if(tipo.equals("r")){
			    if(mesh.opt("tipo").toString().matches("z_residencia")){return true;} else
			    if(mesh.opt("tipo").toString().matches("z_residencia2")){return true;} else {return false;}
			  } if(tipo.equals("c")){
			    if(mesh.opt("tipo").toString().matches("z_comercio")){return true;} else {return false;}
			  }
		} 
		return false;
	}
	
	public static String select_construcao() {
		Random random = new Random();
		int n = random.nextInt(3) + 1;
		return "graphic/mesh/construcao"+n+".png";
	}
	
	public static String verify_comercial_zones(City city, String json_s, Date date_turn) throws JSONException {
		ArrayList<String> addMesh_output = new ArrayList<String>();
		
		JSONObject json = new JSONObject(json_s);
		json.getJSONObject("size");
		
		//SIZE
		int size_x = Integer.parseInt(json.getJSONObject("size").get("x").toString());
		int size_y = Integer.parseInt(json.getJSONObject("size").get("y").toString());
		//DATA
		JSONArray data = json.getJSONArray("data");
		
		if(city.getC()>50) {
			for(int x=0;x<size_x;x++) {
				for(int y=0;y<size_y;y++) {
					JSONObject mesh = data.getJSONArray(y).getJSONObject(x).optJSONObject("mesh");
					if(mesh != null) {
						int demanda = city.getC();		
						Random random_obj = new Random();
						int random = 100-random_obj.nextInt(100);
						if(demanda>random && isZone("c",mesh)){
							if(mesh.opt("tipo").equals("z_comercio")) {								
								Calendar calendar = Calendar.getInstance(); 
								calendar.setTime(date_turn); 
								calendar.add(Calendar.DATE, 10);
								Date date_construction = calendar.getTime();
								
								addMesh_output.add("{\"x\":"+x+",\"y\":"+y+",\"data\":{\"graphic\":\""+select_construcao()+"\",\"nome\":\"\",\"tipo\":\"c_comercio\",\"energia\":0,\"agua\":0,\"habitantes\":0,\"max_habitantes\":0,\"finaliza_obra\":"+date_construction.getTime()+"}}");						
							}
						}
					}					
				}
			}
		}
		
		return new Gson().toJson(addMesh_output);
	}	
	
	public static String verify_residencial_zones(City city, String json_s, Date date_turn) throws JSONException {
		ArrayList<String> addMesh_output = new ArrayList<String>();
		
		JSONObject json = new JSONObject(json_s);
		json.getJSONObject("size");
		
		//SIZE
		int size_x = Integer.parseInt(json.getJSONObject("size").get("x").toString());
		int size_y = Integer.parseInt(json.getJSONObject("size").get("y").toString());
		//DATA
		JSONArray data = json.getJSONArray("data");
		
		if(city.getR()>50) {
			for(int x=0;x<size_x;x++) {
				for(int y=0;y<size_y;y++) {
					JSONObject mesh = data.getJSONArray(y).getJSONObject(x).optJSONObject("mesh");
					if(mesh != null) {
						int demanda = city.getR();		
						Random random_obj = new Random();
						int random = 100-random_obj.nextInt(100);						
						if(demanda>random && isZone("r",mesh)){
							if(mesh.opt("tipo").equals("z_residencia")) {	
								Calendar calendar = Calendar.getInstance(); 
								calendar.setTime(date_turn); 
								calendar.add(Calendar.DATE, 7);
								Date date_construction = calendar.getTime();
								
								addMesh_output.add("{\"x\":"+x+",\"y\":"+y+",\"data\":{\"graphic\":\""+select_construcao()+"\",\"nome\":\"\",\"tipo\":\"c_residencia\",\"energia\":0,\"agua\":0,\"habitantes\":0,\"max_habitantes\":0,\"finaliza_obra\":"+date_construction.getTime()+"}}");						
							} else if(mesh.opt("tipo").equals("z_residencia2")) {
								Calendar calendar = Calendar.getInstance(); 
								calendar.setTime(date_turn); 
								calendar.add(Calendar.DATE, 14);
								Date date_construction = calendar.getTime();
								
								addMesh_output.add("{\"x\":"+x+",\"y\":"+y+",\"data\":{\"graphic\":\""+select_construcao()+"\",\"nome\":\"\",\"tipo\":\"c_residencia2\",\"energia\":0,\"agua\":0,\"habitantes\":0,\"max_habitantes\":0,\"finaliza_obra\":"+date_construction.getTime()+"}}");						
							}
						}
					}
				}
			}
		}
		
		return new Gson().toJson(addMesh_output);
	}
}