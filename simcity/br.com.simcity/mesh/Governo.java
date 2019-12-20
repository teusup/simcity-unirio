package mesh;

public class Governo extends Publico {
	public enum TiposDeGoverno {
		PREFEITURA(4000), CAMARA_MUNICIPAL(3400);
		public int construir_custo;

		TiposDeGoverno(int construir_custo) {
			this.construir_custo = construir_custo;

		}
	}

	Governo(int custoConstrucao, int manutencaoSemanal, int energia_necessaria, int agua_necessaria) {
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria);
	}
}