package main

import (
    "fmt"
    "net/http"
    "encoding/json"
)
//react json that came to go hence converted it
type AnswerRequestFromReact struct{
	QuestionID int `json:"questionId"`
	Answer string `json:"answer"`
}



//adding answerResponse struct so that we can send json back to react
type AnswerResponse struct{
	Success bool `json:"success"`
	QuestionID int `json:"questionId"`
	Message string 	`json:"message"`
}

func helloHandler(w http.ResponseWriter,r *http.Request){
    fmt.Fprintln(w,"Welcome to AI interviewer")
    fmt.Fprintln(w,"Method:",r.Method)
    fmt.Fprintln(w,"Path:",r.URL.Path)
    fmt.Fprintln(w,"Host:",r.Host)

}

func aboutHandler(w http.ResponseWriter,r *http.Request){
    fmt.Fprintln(w,"Welcome to AI Interviewer Backend")
    fmt.Fprintln(w,"Method:",r.Method)
    fmt.Fprintln(w,"Path:",r.URL.Path)
}
func statusHandler(w http.ResponseWriter,r *http.Request){
	fmt.Fprintln(w,"AI Interviewer Server is Running")
	fmt.Fprintln(w,"Method:",r.Method)
	fmt.Fprintln(w,"URL:",r.URL.Path)
	fmt.Fprintln(w,"Host:",r.Host)

}
func questionHandler(w http.ResponseWriter,r *http.Request){
if r.Method!=http.MethodGet{
	http.Error(w,"Only get requests are allowed",http.StatusMethodNotAllowed)
	return
}
 fmt.Fprintln(w, "What is a closure in JavaScript?")
}


func answerHandler(w http.ResponseWriter,r *http.Request){
	if r.Method!=http.MethodPost{
		http.Error(w,"Only post methods are allowed",http.StatusMethodNotAllowed)
		return
	}
	//getting data from react(in json) and converting it to g struct
var answerFromReact AnswerRequestFromReact
err:=json.NewDecoder(r.Body).Decode(&answerFromReact)
if err!=nil{
	http.Error(w,"invalid json",http.StatusBadRequest)
	return
}
//validations
if answerFromReact.QuestionID<=0{
	http.Error(w,"Question id's cant be negative",http.StatusBadRequest)
	return
}
if strings.TrimSpace(answerFromReact.Answer)==""{
http.Error(w,"Answer cannot be empty",http.StatusBadRequest)
return
}
//rather than sending plain text
//fmt.Fprintln(w,"QuestionID:",answerFromReact.QuestionId)
// fmt.Fprintln(w,"Answer:",answerFromReact.Answer)


//lets send now json to react so we have to convert go struct now to json
answerBackToReact:= AnswerResponse{
	  Success:    true,
    QuestionID: answerFromReact.QuestionID,
    Message:    "Answer submitted successfully",
}
w.Header().Set("Content-Type", "application/json")
err2:=json.NewEncoder(w).Encode(answerBackToReact)
if err2!=nil{
	  fmt.Println("Failed to encode/write response:", err)
}
}
func main() {
    http.HandleFunc("/hello", helloHandler)

http.HandleFunc("/about",aboutHandler)
http.HandleFunc("/status",statusHandler)
http.HandleFunc("/api/question", questionHandler)
http.HandleFunc("/api/answer", answerHandler)
    fmt.Println("Server running on port 8080")

    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        fmt.Println("Server error:", err)
    }
}