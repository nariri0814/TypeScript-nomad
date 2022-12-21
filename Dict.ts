type Words = {
    [key: string]: string | string[]
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word: Word) { // 클래스를 타입처럼 쓸 수 있음
        if (this.words[word.term] === undefined) {
            // 주어진 단어가 아직 사전에 존재하지 않았을 때
            this.words[word.term] = word.def
        }
    }
    def(term: string) {
        return this.words[term]
    }
    delete(term: string) {
        delete this.words[term]
    }
    update(oldTerm: string, newTerm: string) {
        if (this.words.hasOwnProperty(oldTerm)) {
            this.words[newTerm] = this.words[oldTerm]
            delete this.words[oldTerm]
        }
    }
}

class Word {
    constructor(
        public readonly term: string, // readonly : term 을 바꿀 수 없음
        public def: string | string[]
    ) { }
    addDef(newDef: string) {
        if (typeof this.def === 'string') {
            this.def = [this.def, newDef];
        } else {
            this.def = [...this.def, newDef]
        }
    }
    updateDef(oldDef: string, newDef: string) {
        if (typeof this.def === 'string') {
            if (oldDef === this.def) this.def = newDef
        } else {
            this.def.filter(el => el !== oldDef)
            this.def.push(newDef)
        }
    }
}

// 출력
const kimchi = new Word("kimchi", "김치");
const coffee = new Word("coffee", "생명수");
const cake = new Word("cake", "케이크");
const cookie = new Word("cookie", "쿠키");
const ramen = new Word("라면", "라면");

kimchi.addDef("한국 음식");
coffee.updateDef("생명수", "커피");

const dict = new Dict();
dict.add(kimchi);
dict.add(coffee);
dict.add(cake);

dict.update("라면", "ramen");
dict.delete("cake");