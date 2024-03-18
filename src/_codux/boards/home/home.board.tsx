import { createBoard } from '@wixc3/react-board';
import { Home } from '../../../components/home/home';
import { PageNoNavigation } from '../../board-wrappers/page-no-navigation';

export default createBoard({
    name: 'Home',
    Board: () => (
        <PageNoNavigation>
            <Home />
        </PageNoNavigation>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1280,
        windowHeight: 1024,
    },
});
