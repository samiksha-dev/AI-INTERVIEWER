package main

import (
	"fmt"
	"ai-interviewer-backend/internal/interview"
	"ai-interviewer-backend/internal/evaluator"
)

func main() {
	i := interview.Interview{
		ID:        "1",
		Candidate: "Samiksha Sahu",
		Status:    "pending",
		Role:      "Software Engineer",
		Questions: []string{
			"What is React",
			"What is Javascript",
			"What is SQL",
		},
		Scores: map[string]int{
			"DBMS":    89,
			"DSA":     78,
			"Network": 79,
		},
	}
	fmt.Println(i.Status)

	i.Start()

	fmt.Println(i.Status)

mock:=evaluator.MockEvaluator{}
answer:="A closure remembers variables from its outer scope"
score,err:=evaluator.GetScore(mock,answer)
if err!=nil{
	fmt.Errorf("Something went wrong: failed to get score: %w",err)
}else{
fmt.Println(score)
}

}
