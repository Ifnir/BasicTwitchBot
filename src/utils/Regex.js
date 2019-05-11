class Regex {
    constructor(string, answer) {
        this.string = string;
        this.answer = answer
    }
    match(){
        var regex = new RegExp(Object.keys(this.answer), "gi")

        this.string.match(regex, function(matched) {
            return answer[matched]
        })

    }
}

module.export = new Regex();