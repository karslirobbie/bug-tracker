import React, {useContext, useState} from 'react'
import InputDescription from './InputDescription';
import { CommentContext, UserContext } from '../../context'
import { formatDistance} from 'date-fns'
import { createComment } from '../../services/commentService'
import { toast } from 'react-toastify'


export default function Comments ({selected}) {
  const [comment, setComment] = useState("")
  const { comments, setComments } = useContext(CommentContext)
  const { users: { currentUser}} = useContext(UserContext)

  const ticketComments = () =>  comments.filter(({parentTag}) =>  parentTag === selected.tag)
  const formattedDate = (date) => formatDistance(new Date(date), new Date(Date.now()), { addSuffix: true })

  const handleChange = ({currentTarget}) => setComment(currentTarget.value)
  
  const handleSave = () => {
    const commentObj = { 
      comment, createdBy: currentUser._id, 
      parentTag: selected.tag, 
      dateCreated: new Date(Date.now())
    }
    const newComments = [...comments, commentObj]
    
    setComments(newComments);

    try{
      createComment(commentObj)
      toast.dark('Comment Sent.')
    }catch(exc){
      toast.dark('Comment could not be sent. Try again later.')
    }
  }

  return (
    <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-xs md:text-sm font-medium text-gray-500">
        Comments
      </dt>
      <dd className="text-xs md:text-sm text-gray-400  sm:col-span-2">
        <ul >
          <li className="pr-4 flex items-center justify-between text-xs md:text-sm">
            <div className="w-full flex items-center">
              <InputDescription placeholder="Type your comment here" onChange={handleChange} />
            </div>
            <div className="ml-4 w-10 flex-shrink-0">
              { comment && <button onClick={handleSave} className="outline-none border-none focus:outline-none focus:ring-1 focus:ring-lime-400  bg-gray-800 px-3 py-2 text-lime-400 rounded-md">Done</button> }
            </div>
          </li>
          <li className="pt-6">
            <div className="flow-root">
              <ul className="-mb-8">
                { ticketComments().map((comment, index) => (

                  <li key={index}>
                  <div className="relative pb-8">
                    { index < ticketComments().length-1 && <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-500" aria-hidden="true"></span> }
                    <div className="relative flex items-start space-x-3">
                      <div className="relative">
                        <div className="h-7 w-7 rounded-full bg-gray-800 flex items-center justify-center ring-8 ring-gray-700"></div>
                        <span className="absolute -bottom-0.5 -right-1 bg-transparent rounded-tl px-0.5 py-px">
                          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a href="#" className="font-medium text-gray-500">
                              { comment?.createdBy.name == currentUser.name ? 'You' : comment?.createdBy.name }
                            </a>
                          </div>
                          <p className="mt-0.5 text-xs text-gray-600">
                            Commented {formattedDate(comment.dateCreated)}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          <p>
                            {comment?.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                )) }
              </ul>
            </div>
          </li>
        </ul>
      </dd>

    </div>
  )
}
