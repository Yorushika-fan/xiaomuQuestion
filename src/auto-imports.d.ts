/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
// biome-ignore lint: disable
export {}
declare global {
    const Action: (typeof import('./pages/demo/reducer'))['Action']
    const ActionType: (typeof import('./pages/demo/reducer'))['ActionType']
    const App: (typeof import('./App'))['default']
    const Component: (typeof import('./components/question/title/Component'))['default']
    const ComponentLib: (typeof import('./pages/question/edit/ComponentLib'))['default']
    const ComponentProp: (typeof import('./pages/question/edit/ComponentProp'))['default']
    const DEFAULT_CURRENT: (typeof import('./constants/index'))['DEFAULT_CURRENT']
    const DEFAULT_PAGE: (typeof import('./constants/index'))['DEFAULT_PAGE']
    const DEFAULT_PAGE_SIZE: (typeof import('./constants/index'))['DEFAULT_PAGE_SIZE']
    const Edit: (typeof import('./pages/question/Edit'))['default']
    const EditCanvas: (typeof import('./pages/question/edit/EditCanvas'))['default']
    const EditHeader: (typeof import('./pages/question/edit/EditHeader'))['default']
    const EditToolbarr: (typeof import('./pages/question/edit/EditToolbarr'))['default']
    const Footer: (typeof import('./components/layouts/Footer'))['default']
    const HOME_PATHNAME: (typeof import('./constants/index'))['HOME_PATHNAME']
    const Header: (typeof import('./components/layouts/Header'))['default']
    const Home: (typeof import('./pages/Home/index'))['default']
    const InfoDefaultProps: (typeof import('./components/question/info/interface'))['InfoDefaultProps']
    const KEYWORD_PARAM_KEY: (typeof import('./constants/index'))['KEYWORD_PARAM_KEY']
    const LIST_SEARCH_PARAM_KEY: (typeof import('./constants/index'))['LIST_SEARCH_PARAM_KEY']
    const LOGIN_PATHNAME: (typeof import('./constants/index'))['LOGIN_PATHNAME']
    const Layers: (typeof import('./pages/question/edit/Layers'))['default']
    const LeftPanel: (typeof import('./pages/question/edit/LeftPanel'))['default']
    const Link: (typeof import('react-router-dom'))['Link']
    const List: (typeof import('./pages/manage/List'))['default']
    const Login: (typeof import('./pages/auth/Login'))['default']
    const Logo: (typeof import('./components/Logo'))['default']
    const MANAGE_INDEX_PATHNAME: (typeof import('./constants/index'))['MANAGE_INDEX_PATHNAME']
    const MainLayout: (typeof import('./components/layouts/MainLayout'))['default']
    const ManageLayout: (typeof import('./components/layouts/ManageLayout'))['default']
    const NavLink: (typeof import('react-router-dom'))['NavLink']
    const Navigate: (typeof import('react-router-dom'))['Navigate']
    const NotFound: (typeof import('./pages/error/NotFound'))['default']
    const Outlet: (typeof import('react-router-dom'))['Outlet']
    const PAGE_PARAM_KEY: (typeof import('./constants/index'))['PAGE_PARAM_KEY']
    const PAGE_SIZE: (typeof import('./constants/index'))['PAGE_SIZE']
    const PAGE_SIZE_PARAM_KEY: (typeof import('./constants/index'))['PAGE_SIZE_PARAM_KEY']
    const ParagraphDefaultProps: (typeof import('./components/question/paragraph/interface'))['ParagraphDefaultProps']
    const PropComponent: (typeof import('./components/question/title/PropComponent'))['default']
    const QuestionCheckboxDefaultProps: (typeof import('./components/question/checkbox/interface'))['QuestionCheckboxDefaultProps']
    const QuestionInput: (typeof import('./components/question/input/QuestionInput'))['default']
    const QuestionInputDefaultProps: (typeof import('./components/question/input/interface'))['QuestionInputDefaultProps']
    const QuestionLayout: (typeof import('./components/layouts/QuestionLayout'))['default']
    const QuestionParagraphConf: (typeof import('./components/question/paragraph/index'))['QuestionParagraphConf']
    const QuestionRadioDefaultProps: (typeof import('./components/question/radio/interface'))['QuestionRadioDefaultProps']
    const QuestionTextareaDefaultProps: (typeof import('./components/question/textarea/interface'))['QuestionTextareaDefaultProps']
    const QuestionTitle: (typeof import('./components/question/title/index'))['QuestionTitle']
    const QuestionTitleDefaultProps: (typeof import('./components/question/title/interface'))['QuestionTitleDefaultProps']
    const REGISTER_PATHNAME: (typeof import('./constants/index'))['REGISTER_PATHNAME']
    const Register: (typeof import('./pages/auth/Register'))['default']
    const RightPannel: (typeof import('./pages/question/edit/RightPannel'))['default']
    const Route: (typeof import('react-router-dom'))['Route']
    const RouteGuard: (typeof import('./router/RouteGuard'))['default']
    const Routes: (typeof import('react-router-dom'))['Routes']
    const Slider: (typeof import('./components/layout/Slider'))['default']
    const Star: (typeof import('./pages/manage/Star'))['default']
    const Stat: (typeof import('./pages/question/Stat'))['default']
    const TodoContext: (typeof import('./pages/demo/context'))['TodoContext']
    const TodoState: (typeof import('./pages/demo/reducer'))['TodoState']
    const Trash: (typeof import('./pages/manage/trash/Trash'))['default']
    const USER_INFO_KEY: (typeof import('./constants/index'))['USER_INFO_KEY']
    const USER_INFO_PATHNAME: (typeof import('./constants/index'))['USER_INFO_PATHNAME']
    const USER_TOKEN_KEY: (typeof import('./constants/index'))['USER_TOKEN_KEY']
    const UserInfo: (typeof import('./components/UserInfo'))['default']
    const Welcome: (typeof import('./pages/Welcome/index'))['default']
    const addComponent: (typeof import('./store/componentsReducer/index'))['addComponent']
    const addTodo: (typeof import('./store/todoList'))['addTodo']
    const card: (typeof import('./components/card/index'))['default']
    const changeComponentHidden: (typeof import('./store/componentsReducer/index'))['changeComponentHidden']
    const changeComponentProps: (typeof import('./store/componentsReducer/index'))['changeComponentProps']
    const changeComponentTitle: (typeof import('./store/componentsReducer/index'))['changeComponentTitle']
    const changeSelectedId: (typeof import('./store/componentsReducer/index'))['changeSelectedId']
    const checkStatus: (typeof import('./utils/request/status'))['checkStatus']
    const checkbox: (typeof import('./components/question/checkbox/index'))['default']
    const columns: (typeof import('./pages/manage/trash/service'))['columns']
    const component: (typeof import('./components/question/title/Component'))['default']
    const componentConfGroup: (typeof import('./components/question/index'))['componentConfGroup']
    const componentsReducer: (typeof import('./store/componentsReducer/index'))['default']
    const componentsSlice: (typeof import('./store/componentsReducer/index'))['componentsSlice']
    const constantRoutes: (typeof import('./router/index'))['constantRoutes']
    const copySelectedComponent: (typeof import('./store/componentsReducer/index'))['copySelectedComponent']
    const createQuestion: (typeof import('./api/question'))['createQuestion']
    const createRef: (typeof import('react'))['createRef']
    const deleteComponent: (typeof import('./store/componentsReducer/index'))['deleteComponent']
    const deleteItem: (typeof import('./pages/manage/trash/service'))['deleteItem']
    const deleteQuestion: (typeof import('./api/question'))['deleteQuestion']
    const deleteTodo: (typeof import('./store/todoList'))['deleteTodo']
    const demo: (typeof import('./pages/demo/index'))['default']
    const duplicateQuestion: (typeof import('./api/question'))['duplicateQuestion']
    const edit: (typeof import('./pages/question/edit/index'))['default']
    const forwardRef: (typeof import('react'))['forwardRef']
    const getColumns: (typeof import('./pages/manage/trash/service'))['getColumns']
    const getData: (typeof import('./pages/manage/trash/service'))['getData']
    const getDeletedQuestionList: (typeof import('./api/question'))['getDeletedQuestionList']
    const getNextSelectedId: (typeof import('./store/componentsReducer/utils'))['getNextSelectedId']
    const getQuestion: (typeof import('./api/question'))['getQuestion']
    const getQuestionList: (typeof import('./api/question'))['getQuestionList']
    const getStarQuestionList: (typeof import('./api/question'))['getStarQuestionList']
    const getToken: (typeof import('./utils/user/index'))['getToken']
    const getUserInfo: (typeof import('./api/user'))['getUserInfo']
    const handlePageChange: (typeof import('./pages/manage/trash/service'))['handlePageChange']
    const hideComponent: (typeof import('./store/componentsReducer/index'))['hideComponent']
    const info: (typeof import('./components/question/info/index'))['default']
    const initialState: (typeof import('./pages/demo/reducer'))['initialState']
    const input: (typeof import('./components/question/input/index'))['default']
    const insertComponent: (typeof import('./store/componentsReducer/utils'))['insertComponent']
    const lazy: (typeof import('react'))['lazy']
    const login: (typeof import('./api/user'))['login']
    const loginReducer: (typeof import('./store/userReducer'))['loginReducer']
    const logout: (typeof import('./api/user'))['logout']
    const logoutReducer: (typeof import('./store/userReducer'))['logoutReducer']
    const memo: (typeof import('react'))['memo']
    const mock: (typeof import('./mock/index'))['default']
    const newQuestion: (typeof import('./api/question'))['newQuestion']
    const onSearch: (typeof import('./pages/manage/trash/service'))['onSearch']
    const paragraph: (typeof import('./components/question/paragraph/index'))['default']
    const pasteCopiedComponent: (typeof import('./store/componentsReducer/index'))['pasteCopiedComponent']
    const propComponent: (typeof import('./components/question/paragraph/propComponent'))['default']
    const question: (typeof import('./components/question/index'))['default']
    const questionList: (typeof import('./mock/data'))['questionList']
    const radio: (typeof import('./components/question/radio/index'))['default']
    const reducer: (typeof import('./pages/demo/reducer'))['reducer']
    const register: (typeof import('./api/user'))['register']
    const removeToken: (typeof import('./utils/user/index'))['removeToken']
    const request: (typeof import('./utils/request/request'))['default']
    const resetComponents: (typeof import('./store/componentsReducer/index'))['resetComponents']
    const router: (typeof import('./router/index'))['default']
    const search: (typeof import('./pages/demo/search'))['default']
    const selectNextComponent: (typeof import('./store/componentsReducer/index'))['selectNextComponent']
    const selectPrevComponent: (typeof import('./store/componentsReducer/index'))['selectPrevComponent']
    const setToken: (typeof import('./utils/user/index'))['setToken']
    const startTransition: (typeof import('react'))['startTransition']
    const store: (typeof import('./store/index'))['store']
    const textArea: (typeof import('./components/question/textArea/index'))['default']
    const textarea: (typeof import('./components/question/textarea/index'))['default']
    const title: (typeof import('./components/question/title/index'))['default']
    const todo: (typeof import('./pages/todo/index'))['default']
    const todoList: (typeof import('./store/todoList'))['default']
    const toggleComponentLocked: (typeof import('./store/componentsReducer/index'))['toggleComponentLocked']
    const toggleTodo: (typeof import('./store/todoList'))['toggleTodo']
    const trash: (typeof import('./pages/manage/trash/index'))['default']
    const updateQuestion: (typeof import('./api/question'))['updateQuestion']
    const useBandCanvasKeyPress: (typeof import('./hooks/useBandCanvasKeyPress'))['default']
    const useCallback: (typeof import('react'))['useCallback']
    const useContext: (typeof import('react'))['useContext']
    const useDebugValue: (typeof import('react'))['useDebugValue']
    const useDeferredValue: (typeof import('react'))['useDeferredValue']
    const useEffect: (typeof import('react'))['useEffect']
    const useGetComponentInfo: (typeof import('./hooks/useGetComponentInfo'))['default']
    const useGetInfo: (typeof import('./hooks/useGetInfo'))['default']
    const useGetUserInfo: (typeof import('./hooks/useGetUserInfo'))['default']
    const useHref: (typeof import('react-router-dom'))['useHref']
    const useId: (typeof import('react'))['useId']
    const useImperativeHandle: (typeof import('react'))['useImperativeHandle']
    const useInRouterContext: (typeof import('react-router-dom'))['useInRouterContext']
    const useInsertionEffect: (typeof import('react'))['useInsertionEffect']
    const useLayoutEffect: (typeof import('react'))['useLayoutEffect']
    const useLinkClickHandler: (typeof import('react-router-dom'))['useLinkClickHandler']
    const useLoadQuestionData: (typeof import('./hooks/useLoadQuestionData'))['default']
    const useLoadQuestionListData: (typeof import('./hooks/useLoadQuestionListData'))['default']
    const useLoadUserData: (typeof import('./hooks/useLoadUserData'))['default']
    const useLocation: (typeof import('react-router-dom'))['useLocation']
    const useMemo: (typeof import('react'))['useMemo']
    const useNavigate: (typeof import('react-router-dom'))['useNavigate']
    const useNavigationType: (typeof import('react-router-dom'))['useNavigationType']
    const useOutlet: (typeof import('react-router-dom'))['useOutlet']
    const useOutletContext: (typeof import('react-router-dom'))['useOutletContext']
    const useParams: (typeof import('react-router-dom'))['useParams']
    const useReducer: (typeof import('react'))['useReducer']
    const useRef: (typeof import('react'))['useRef']
    const useResolvedPath: (typeof import('react-router-dom'))['useResolvedPath']
    const useRoutes: (typeof import('react-router-dom'))['useRoutes']
    const useSearchParams: (typeof import('react-router-dom'))['useSearchParams']
    const useState: (typeof import('react'))['useState']
    const useSyncExternalStore: (typeof import('react'))['useSyncExternalStore']
    const useTitile: (typeof import('./hooks/useTitile'))['default']
    const useTransition: (typeof import('react'))['useTransition']
    const userLogin: (typeof import('./api/user'))['userLogin']
    const userLogout: (typeof import('./api/user'))['userLogout']
    const userReducer: (typeof import('./store/userReducer'))['default']
    const userRegister: (typeof import('./api/user'))['userRegister']
    const userSlice: (typeof import('./store/userReducer'))['userSlice']
    const utils: (typeof import('./utils/request/index'))['default']
}
