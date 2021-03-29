export const currentUserSelector = ({currentUser}) => typeof currentUser.data !== `undefined` ? currentUser.data : `undefined`;
