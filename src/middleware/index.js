import { Octokit} from "octokit";

const octokit = new Octokit({
    auth: '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'
})


export const middleware = {

    getGistsusers: async (data) => {
        try {
            const response = await octokit.request(`GET /users/${data.userName}/gists`, {
                username: data.username
            })
            return response
        } catch (error) {

        }
    },
    getSingleGistUrl: async (data) => {
        try {
            const response = await octokit.request(`GET /gists/${data.id}`, {
            })
            return response
        } catch (error) {

        }
    },
}