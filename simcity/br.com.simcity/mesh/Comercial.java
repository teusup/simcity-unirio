package mesh;

public class Comercial extends Privado {
	private int empregos;
	private int maxEmpregos;
	
	public Comercial(int custoConstrucao, int manutencaoSemanal, int energia_necessaria, int agua_necessaria, int empregos, int maxEmpregos, int imposto) {		
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria, imposto);
		this.empregos = empregos;
		this.maxEmpregos = maxEmpregos;
	}
	
	public void setEmpregos(int empregos) {
		this.empregos = empregos;
	}

	public void setMaxEmpregos(int maxEmpregos) {
		this.maxEmpregos = maxEmpregos;
	}

	public int getEmpregos() {
		return empregos;
	}
	
	public int getMaxEmpregos() {
		return maxEmpregos;
	}
}
