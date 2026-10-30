package evaluator
import "errors"
type Evaluator interface{
	Evaluate(answer string) (int,error)
}
type MockEvaluator struct{
	
}
func (m MockEvaluator) Evaluate(answer string) (int,error){
	if answer==""{
		return 0,errors.New("answer cannot be empty")
	}
	return 80,nil
}
func GetScore(e Evaluator, answer string) (int,error) {
       score, err := e.Evaluate(answer)
    return score, err
}
