package mesh;

public class AbastecimentoAgua extends Publico {
	private int abastecimentoVolume;
	private int abastecimentoArea;

	AbastecimentoAgua(int custoConstrucao,int manutencaoSemanal,int energia_necessaria,int agua_necessaria) {
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria);
		
	}

	public int getAbastecimentoVolume() {
		return abastecimentoVolume;
	}

	public void setAbastecimentoVolume(int abastecimentoVolume) {
		this.abastecimentoVolume = abastecimentoVolume;
	}

	public int getAbastecimentoArea() {
		return abastecimentoArea;
	}

	public void setAbastecimentoArea(int abastecimentoArea) {
		this.abastecimentoArea = abastecimentoArea;
	}
}