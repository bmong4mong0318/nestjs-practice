import {Injectable, NotFoundException} from '@nestjs/common';
import {Board, BoardStatus} from "./boards.model";
import {v1 as uuid} from 'uuid';
import {CreateBoardDto} from "./dto/create-board.dto";

@Injectable()
export class BoardsService {
    // 게시판의 데이터를 담음
    // private을 사용하지 않으면 다른 컴포넌트에서 boards 값을 변경할 수도 있다.
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto) {
        const {title, description} = createBoardDto;

        // TODO: 이거 왜 콘스트로 하는지?
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        const found = this.boards.find((board) => board.id === id);

        if (!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return found;
    }

    deleteBoard(id: string): void {
        const found = this.getBoardById(id);
        this.boards = this.boards.filter((board) => board.id !== found.id);
    }

    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }

}
