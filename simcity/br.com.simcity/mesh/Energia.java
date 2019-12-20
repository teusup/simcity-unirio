package mesh;

public class Energia extends Publico {
	private int energia_megawatts;
	private int energia_poluicao;

	Energia(int custoConstrucao,int manutencaoSemanal,int energia_necessaria,int agua_necessaria, int energia_megawatts, int energia_poluicao) {
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria);
		this.energia_megawatts = energia_megawatts;
		this.energia_poluicao = energia_poluicao;
	}

	public int getEnergiaWatts() {
		return energia_megawatts;
	}

	public void setEnergiaWatts(int energia_megawatts) {
		this.energia_megawatts = energia_megawatts;
	}

	public int getEnergiaPoluicao() {
		return energia_poluicao;
	}

	public void setEnergiaPoluicao(int energia_poluicao) {
		this.energia_poluicao = energia_poluicao;
	}
}