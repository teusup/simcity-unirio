package mesh;

public class Lazer extends Publico {
	int visitantes;
	int Maxvisitantes;
	
	Lazer(int custoConstrucao, int manutencaoSemanal, int energia_necessaria, int agua_necessaria) {
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria);
		
		
	}
	public void setVisitantes(int visitantes) {
		this.visitantes = visitantes;
	}
	public void setMaxVisitantes(int Maxvisitantes) {
		this.Maxvisitantes = Maxvisitantes;
	}
	public int getVisitantes(){
		return visitantes;
	}
	public int getMaxVisitantes(){
		return Maxvisitantes;
	}
}