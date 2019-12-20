package mesh;

public class Bombeiro extends Publico {
public int bombeiroArea;
	Bombeiro(int custoConstrucao,int manutencaoSemanal,int energia_necessaria,int agua_necessaria) {
		super(custoConstrucao, manutencaoSemanal, energia_necessaria, agua_necessaria);
	}
	public void setBombeiroArea(int bombeiroArea){
		this.bombeiroArea = bombeiroArea;
	}
	public int getBombeiroArea(){
		return bombeiroArea;
	}
}