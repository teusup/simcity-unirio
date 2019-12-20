package mesh;

import java.util.ArrayList;

public class Mesh {
	public int energia_necessaria;
	public int agua_necessaria;
	public int custoConstrucao;
	public int manutencaoSemanal;
	public String tipo;

	public Mesh(int custoConstrucao, int manutencaoSemanal, int energia_necessaria, int agua_necessaria) {
		this.energia_necessaria = energia_necessaria;
		this.agua_necessaria = agua_necessaria;
		this.custoConstrucao = custoConstrucao;
		this.manutencaoSemanal = manutencaoSemanal;
	}

	public ArrayList<Mesh> instanciar() {
		ArrayList<Mesh> mesh = new ArrayList<Mesh>();
		// (custoConstrucao, manutencaoSemanal, energia_necessaria,
		// agua_necessaria)
		// RESIDENCIA
		mesh.add(new Residencial(0, 0, 50, 50, 0, 10, 20));
		// COMERCIAL
		mesh.add(new Comercial(0, 0, 100, 100, 0, 45, 50));
		// INDUSTRIAL		
		mesh.add(new Industrial(0, 0, 200, 100, 0, 50, 60));
		
		// TRANSPORTE
		// AEROPORTO
		mesh.add(new Transporte(8000, 400, 2000, 3500));
		// ONIBUS
		mesh.add(new Transporte(200, 60, 0, 0));
		// TREM
		mesh.add(new Transporte(3500, 175, 1500, 350));
		
		// SEGURANCA
		// DELEGACIA
		mesh.add(new Seguranca(3250, 162, 2000, 1000));
		// GUARITA
		mesh.add(new Seguranca(250, 12, 500, 100));
		// PRESIDIO
		mesh.add(new Seguranca(6000, 300, 2000, 1500));
		// LAZER
		// parque
		mesh.add(new Lazer(1200, 5, 0, 300));
		// praça
		mesh.add(new Lazer(300, 15, 0, 200));
		// estadio
		mesh.add(new Lazer(5000, 250, 1500, 2000));
		
		// HOSPITAL
		mesh.add(new Hospital(5200, 260, 2500, 2000));
		
		// ENERGIA
		// USINA_CARVAO
		mesh.add(new Energia(4300, 215, 0, 1500, 0, 0));
		// USINA_NUCLEAR
		mesh.add(new Energia(10000, 500, 0, 1500, 0, 0));
		// AEROGERADOR
		mesh.add(new Energia(3900, 195, 0, 0, 0, 0));
		// POSTE_ENERGIA
		mesh.add(new Energia(20, 1, 0, 0, 0, 0));
		
		// EDUCACAO
		// UNIVERSIDADE
		mesh.add(new Educacao(3800, 190, 2500, 2000));
		// BIBLIOTECA
		mesh.add(new Educacao(2500, 125, 1500, 1500));
		// ESCOLA
		mesh.add(new Educacao(3000, 150, 2000, 1000));
		// BOMBEIROS
		mesh.add(new Bombeiro(2600, 130, 1500, 1000));

		// ABASTECIMENTO DE AGUA
		// BOMBA_AGUA
		mesh.add(new AbastecimentoAgua(2000, 100, 2000, 0));
		// CAIXA_AGUA
		mesh.add(new AbastecimentoAgua(1500, 75, 0, 0));
		return mesh;
	}
}