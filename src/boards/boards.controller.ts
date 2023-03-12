import {Body, Controller, Get, Post} from '@nestjs/common';
import {BoardsService} from "./boards.service";
import {Board} from "./boards.model";
import {CreateBoardDto} from "./dto/create-board.dto";

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[]{
    return this.boardsService.getAllBoards();
  }

  @Post()
  // body에 게시물에 대한 이름과 설명이 다 들어있다
  createBoard(
      @Body() createBoardDto: CreateBoardDto
  ): Board {
    return this.boardsService.createBoard(createBoardDto);
  }
}
