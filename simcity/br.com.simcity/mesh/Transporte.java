package mesh;

public class Transporte extends Publico {
	private int capacidade;
	private int tarifa;
	
	Transporte(int custoConstrucao, int manutencaoSemanal, int energia_necessaria, int agua_necessaria) {
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria);
	}

	public enum TiposDeTransporte {
		AEROPORTO(8000), ONIBUS(200), TREM(3500);
		public int construir_custo;

		TiposDeTransporte(int construir_custo) {
			this.construir_custo = construir_custo;
		}
	}

	public int getCapacidade() {
		return capacidade;
	}

	public void setCapacidade(int capacidade) {
		this.capacidade = capacidade;
	}

	public float getTarifa() {
		return tarifa;
	}

	public void setTarifa(int tarifa) {
		this.tarifa = tarifa;
	}
}