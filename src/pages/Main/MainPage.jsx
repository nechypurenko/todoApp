import * as styled from './MainPage.styled'
import { TodoView } from '../../components/TodoView';

export const MainPage = () => {

    return (
        <styled.Page>
            <TodoView />
        </styled.Page>
    );
}