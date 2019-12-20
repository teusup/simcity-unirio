package turn;

import java.util.ArrayList;

import mesh.Mesh;
import mesh.Privado;
import mesh.Publico;

public class Financeiro {
	public void cobrarImposto(City cidade) {
		for(int i=0;i<cidade.getEdificios().size();i++) {
			Mesh edificio = cidade.getEdificios().get(i);
			if(edificio instanceof Privado) {
				cidade.setMoney(cidade.getMoney() + ((Privado) edificio).getImposto());
				atualizarProjecao(((Privado) edificio).getImposto(),cidade);
			}
		}
	}
	public void pagarManutencao(City cidade) {
		for(int i=0;i<cidade.getEdificios().size();i++) {
			Mesh edificio = cidade.getEdificios().get(i);
			if(edificio instanceof Publico) {
				cidade.setMoney(cidade.getMoney() - ((Publico) edificio).manutencaoSemanal);
				atualizarProjecao(((Publico) edificio).manutencaoSemanal*-1,cidade);
			}
		}		
	}
	public void atualizarProjecao(int money, City cidade) {
		cidade.setProjecao(cidade.getProjecao()+money);
	}
}
