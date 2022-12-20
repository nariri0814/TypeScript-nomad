type Words = {
    [key:string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word:Word){ // 클래스를 타입처럼 쓸 수 있음
        if(this.words[word.term] === undefined){
            // 주어진 단어가 아직 사전에 존재하지 않았을 때
            this.words[word.term] = word.def
        }
    }
    def(term:string){
        return this.words[term]
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

const Kimchi = new Word("Kinchi", "한국음식")

const dict = new Dict()