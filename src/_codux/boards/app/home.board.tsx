import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'service-categories',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1280,
        windowHeight: 1024,
    },
});
