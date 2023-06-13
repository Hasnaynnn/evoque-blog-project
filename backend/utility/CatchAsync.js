module.exports = (fun)=>{
    return (req, res, next)=>{
        fun(req, res, next).catch(next)
    }
}
// 1. takes a whole function as input
// returns a new function
// 2. calls that function
// 3. if error occurs in this code control moves to next (Error middelware)