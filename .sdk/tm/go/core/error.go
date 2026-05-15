package core

type DisneyError struct {
	IsDisneyError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewDisneyError(code string, msg string, ctx *Context) *DisneyError {
	return &DisneyError{
		IsDisneyError: true,
		Sdk:              "Disney",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *DisneyError) Error() string {
	return e.Msg
}
