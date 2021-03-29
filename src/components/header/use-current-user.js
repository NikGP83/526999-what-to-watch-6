import {useSelector} from 'react-redux';
import {currentUserSelector} from './current-user-selector';

export const useCurrentUser = () => useSelector(currentUserSelector);
