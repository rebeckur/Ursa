#pragma strict
static var pressW : boolean = false;
static var pressA : boolean = false;
static var pressS : boolean = false;
static var pressD : boolean = false; //when player starts game, player will not move
static var speed : int = 5;
static var angle : int = 25;
function Start () {

}

function Update () {
	GetMovement();
	if(pressW){
		transform.Translate (Vector3(0,0,1) * Time.deltaTime*speed);
		//move forward
	}
	if(pressA){
		transform.Rotate (Vector3.down * Time.deltaTime*angle);
		//turn left
	}
	if(pressS){
		transform.Translate (Vector3(0,0,-1) * Time.deltaTime*speed);
		//move backwards
	}
	if(pressD){
		transform.Rotate (Vector3.up * Time.deltaTime*angle);
		//turn right
	}
}

function GetMovement() {
	if (Input.GetKeyDown (KeyCode.W)){
		Debug.Log("Ws pressed");
		pressW = true;
	}
	if (Input.GetKeyUp (KeyCode.W)){
		Debug.Log("W released");
		pressW = !pressW;
	}

	if (Input.GetKeyDown (KeyCode.A)){
		Debug.Log("A pressed");
		pressA = true;
	}
	if (Input.GetKeyUp (KeyCode.A)){
		Debug.Log("A released");
		pressA = !pressA;
	}

	if (Input.GetKeyDown (KeyCode.S)){
		Debug.Log("S pressed");
		pressS = true;
	}
	if (Input.GetKeyUp (KeyCode.S)){
		Debug.Log("S released");
		pressS = !pressS;
	}

	if (Input.GetKeyDown (KeyCode.D)){
		Debug.Log("D pressed");
		pressD = true;
	}
	if (Input.GetKeyUp (KeyCode.D)){
		Debug.Log("D released");
		pressD = !pressD;
	}

}