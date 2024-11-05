import {message} from 'antd'

/**
 * 校验网络请求状态码
 * @param {number} status 状态码
 * @param {string | string[]} msg 错误提示信息
 */
export const checkStatus = (status: number, msg?: string | Array<string>): void => {
    let errMsg = '' // 错误提示信息

    switch (status) {
        case 400:
            message.error('请求失败！请您稍后重试')
            break
        case 401:
            message.error('登录失效！请您重新登录')
            // TODO: 退出登录
            break
        case 403:
            if (msg) {
                errMsg = typeof msg === 'string' ? msg : msg[0]
            }
            message.error(errMsg || '当前账号无权限访问！')
            break
        case 404:
            message.error('你所访问的资源不存在！')
            break
        case 405:
            message.error('请求方式错误！请您稍后重试')
            break
        case 408:
            message.error('请求超时！请您稍后重试')
            break
        case 500:
            message.error('服务异常！')
            break
        case 501:
            message.error('网络未实现！')
            break
        case 502:
            message.error('网络错误！')
            break
        case 503:
            message.error('服务不可用，服务器暂时过载或维护！')
            break
        case 504:
            message.error('网络超时！')
            break
        default:
            if (msg) {
                errMsg = typeof msg === 'string' ? msg : msg[0]
            }
            message.error(errMsg || '请求失败！')
    }
}
