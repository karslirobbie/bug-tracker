import axios from './httpService'


const url = '/comments'

export const getComments = async () => {
  const { data: comments } = await axios.get(url);
  return comments
}


export const createComment = async (body) => {
  const { data: comment } = await axios.post(url, {
    ...body
  })

  return comment;
}