import * as api from '../../api/index.js'

export const setWebListAction = (newWebList) => async (dispatch) => {
    try {
        const { data } = await api.setWebListAPI(newWebList);
        dispatch({ type: 'SET_WEBLIST', data: data?.result });
        return { success: true, message: data?.message }
    } catch (err) {
        console.log(err);
        return { success: false, message: err?.response?.data?.message }
    }
}

export const getWebListAction = () => async (dispatch) => {
    try {
        const { data } = await api.getWebListAPI();
        dispatch({ type: 'GET_WEBLIST', data: data?.result });
        return { success: true, message: data?.message }
    } catch (err) {
        console.log(err);
        return { success: false, message: err?.response?.data?.message }
    }
}

export const updateWebListAction = (id, updatedWebList) => async (dispatch) => {
    try {
        const { data } = await api.UpdateWebListAPI(id, updatedWebList);
        console.log("updateWebListAction :", data?.result)
        dispatch({ type: 'UPDATE_WEBLIST', data: data?.result });
        return { success: true, message: data?.message }
    } catch (err) {
        console.log(err);
        return { success: false, message: err?.response?.data?.message }
    }
}

export const getWebListCRBAction = (createdBy) => async (dispatch) => {
    try {
        const { data } = await api.getWebListCreatedBy(createdBy);
        console.log("getWebListCRBAction :", data?.result)
        dispatch({ type: 'GET_WEBLIST_CRB', data: data?.result });
        return { success: true, message: data?.message }
    } catch (err) {
        console.log(err);
        return { success: false, message: err?.response?.data?.message }
    }
}

export const deleteWebListAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteWebListAPI(id);
        // dispatch({ type: 'DELETE_WEBLIST', data: data?.result });
        return { success: true, message: data?.message }
    } catch (err) {
        console.log(err);
        return { success: false, message: err?.response?.data?.message }
    }
}