package Tile;

public class Terreno extends Via {
	public enum TiposDeTerreno {
		asfalto(50), terra(20), trilho_de_trem(70);
		public int construir_custo;

		TiposDeTerreno(int construir_custo) {
			this.construir_custo = construir_custo;
		}
	}
}