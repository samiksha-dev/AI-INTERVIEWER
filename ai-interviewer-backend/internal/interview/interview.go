package interview

type Interview struct {
	ID        string
	Candidate string
	Role      string
	Status    string
	Questions []string
	Scores    map[string]int
}

func (i *Interview) Start() {
	i.Status = "active"
}
func (i *Interview) AddQuestion(question string) {
	i.Questions = append(i.Questions, question)
}
func (i Interview) CountQuestion() int {
	return len(i.Questions)
}
func (i Interview) HasQuestions() bool {
	return len(i.Questions) != 0
}
func (i *Interview) Complete() {
	i.Status = "completed"
}
func (i *Interview) AddScore(category string, score int) {
	i.Scores[category] = score
}
func main() {

}
