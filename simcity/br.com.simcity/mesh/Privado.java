package mesh;

public class Privado extends Mesh {
	private int imposto;
	
	Privado(int custoConstrucao, int manutencaoSemanal, int energia_necessaria, int agua_necessaria, int imposto) {
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria);
		this.imposto = imposto;
	}
	
	public int getImposto() {
		return imposto;
	}

	public void setImposto(int imposto) {
		this.imposto = imposto;
	}
}
