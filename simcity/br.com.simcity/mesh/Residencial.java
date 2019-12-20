package mesh;

public class Residencial extends Privado {
	private int habitantes;
	private int maxHabitantes;
	
//	private Tiporesidencial edificio;

	public Residencial(int custoConstrucao, int manutencaoSemanal, int energia_necessaria, int agua_necessaria, int habitantes, int maxHabitantes, int imposto) {
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria, imposto);
		this.habitantes = habitantes;
		this.maxHabitantes = maxHabitantes;		
	}

	public void setHabitantes(int habitantes) {
		this.habitantes = habitantes;
	}


	public void setMaxHabitantes(int maxHabitantes) {
		this.maxHabitantes = maxHabitantes;
	}

	public int getHabitantes() {
		return habitantes;
	}

	public int getMaxHabitantes() {
		return maxHabitantes;
	}
}