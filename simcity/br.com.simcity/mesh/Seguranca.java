package mesh;

public class Seguranca extends Publico {

	private int Maxprisioneiros; 
	private int prisioneiros;

	
	Seguranca(int custoConstrucao, int manutencaoSemanal, int energia_necessaria, int agua_necessaria) {
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria);


	}

	public void setPrisioneiros(int prisioneiros){
		this.prisioneiros = prisioneiros;
	}
	public void setMaxPrisioneiros(int Maxprisioneiros){
		this.Maxprisioneiros = Maxprisioneiros;
	}
	public int getprisioneiros(){
		return prisioneiros;
	}
	public int getMaxPrisioneiros(){
		return Maxprisioneiros;
	}
}