package mesh;

public class Hospital extends Publico {
	private int pacientes;
	private int pacientesMax;

	Hospital(int custoConstrucao, int manutencaoSemanal, int energia_necessaria, int agua_necessaria) {
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria);
	}

	public int getPacientes() {
		return pacientes;
	}

	public void setPacientes(int pacientes) {
		this.pacientes = pacientes;
	}

	public int getPacientesMax() {
		return pacientesMax;
	}

	public void setPacientesMax(int pacientesMax) {
		this.pacientesMax = pacientesMax;
	}	
	
}