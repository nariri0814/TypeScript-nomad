import crypto from "crypto";

interface BlockShape {
    hash: string;
    preHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public preHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(preHash, height, data)
    }
    /*
        static 함수 클래스 안에서 사용하는 함수
        클래스 인스터스가 없어도 부를 수 있는 함수
    
    */
   static calculateHash(preHash:string, height:number, data:string) {
    const toHash = `${preHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex")
   }
}

class BlockChain {
    private blocks: Block[];
    constructor() {
        this.blocks = [];
    }
    private getPreHash() {
        if(this.blocks.length === 0) return "";
        // 마지막 블럭의 해쉬값 리턴
        return this.blocks[this.blocks.length -1].hash
    }
    public addBlock(data: string) {
        const newBlock = new Block(this.getPreHash(),this.blocks.length + 1, data)
        this.blocks.push(newBlock);
    }
    public getBlocks() {
        return [...this.blocks]; // 새로운 배열로 리턴(해킹방지)
    }
}

const blockChain = new BlockChain();

blockChain.addBlock('First one');
blockChain.addBlock('Second one');
blockChain.addBlock('Third one');

console.log(blockChain.getBlocks())

// import { init, exit } from "./myPackage";
// init()
// exit(1)