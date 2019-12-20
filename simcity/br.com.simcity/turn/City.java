package turn;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

import mesh.Mesh;

public class City {
	private int r;
	private int c;
	private int i;
	private int money;
	private int projecao;
	private Date date_turn;
	private ArrayList<Mesh> edificios;
	
	public City(int r,int c,int i,int money){		
		try {
			this.date_turn = new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01");
			this.r = r;
			this.c = c;
			this.i = i;
			this.money = money;
		} 
		catch (ParseException e) {
		}
	}
	public int getR() {
		return r;
	}
	public void setR(int r) {
		this.r = r;
	}
	public int getC() {
		return c;
	}
	public void setC(int c) {
		this.c = c;
	}
	public int getI() {
		return i;
	}
	public void setI(int i) {
		this.i = i;
	}
	public int getMoney() {
		return money;
	}
	public void setMoney(int money) {
		this.money = money;
	}
	public Date getDate_turn() {
		return date_turn;
	}
	public void setDate_turn(Date date_turn) {
		this.date_turn = date_turn;
	}
	public ArrayList<Mesh> getEdificios() {
		return edificios;
	}
	public void setEdificios(ArrayList<Mesh> edificios) {
		this.edificios = edificios;
	}
	public int getProjecao() {
		return projecao;
	}
	public void setProjecao(int projecao) {
		this.projecao = projecao;
	}
	public void proximo_dia() {
		Calendar calendar = Calendar.getInstance(); 
		calendar.setTime(date_turn); 
		calendar.add(Calendar.DATE, 1);
		date_turn = calendar.getTime();
	}	
}
