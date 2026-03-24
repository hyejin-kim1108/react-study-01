import { bookName, bookPage } from "../common/default"

export default function book(props) { 
    return ( 
        <div>
            <div>{`이 책의 이름은 `+bookName+` 입니다.`}</div>
            <div>{`현재 읽고 있는 페이지는 `+bookPage+`쪽 입니다.`}</div>
        </div>
    )
} 