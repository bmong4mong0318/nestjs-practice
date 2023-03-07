import { Injectable } from '@nestjs/common';
import {Board} from "./boards.model";

@Injectable()
export class BoardsService {
  // 게시판의 데이터를 담음
  // private을 사용하지 않으면 다른 컴포넌트에서 boards 값을 변경할 수도 있다.
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
}
