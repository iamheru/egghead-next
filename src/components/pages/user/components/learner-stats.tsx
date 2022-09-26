import * as React from 'react'

import {convertMintoHours} from 'utils/time-utils'
import Spinner from 'components/spinner'

type LearnerStatsData = {
  completedCourseCount: number
  completedLessonCount: number
  minutesWatched: number
}

const LearnerStats: React.FC<{
  learnerStatsData: LearnerStatsData
  learnerStatsStatus: 'loading' | 'success' | 'error'
}> = ({learnerStatsData, learnerStatsStatus}) => {
  return (
    <>
      {learnerStatsStatus === 'loading' ? (
        <div className="relative flex justify-center">
          <Spinner className="w-6 h-6 text-gray-600" />
        </div>
      ) : (
        <div>
          {learnerStatsStatus === 'error' ? (
            <span>There was an error fetching stats</span>
          ) : (
            <dl className="bg-white sm:grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              <div className="flex flex-col p-4 text-center">
                <dt className="order-2 mt-1 lg:mt-2 text-base lg:text-lg leading-6 text-gray-600">
                  Watched
                </dt>
                <dd className="order-1 text-4xl lg:text-5xl font-bold tracking-tight text-blue-600">
                  {convertMintoHours(learnerStatsData.minutesWatched)}
                </dd>
              </div>
              <div className="flex flex-col p-4 text-center">
                <dt className="order-2 mt-1 lg:mt-2 text-base lg:text-lg leading-6 text-gray-600">
                  Courses completed
                </dt>
                <dd className="order-1 text-4xl lg:text-5xl font-bold tracking-tight text-blue-600">
                  {learnerStatsData.completedCourseCount}
                </dd>
              </div>
              <div className="flex flex-col p-4 text-center">
                <dt className="order-2 mt-1 lg:mt-2 text-base lg:text-lg leading-6 text-gray-600">
                  Lessons completed
                </dt>
                <dd className="order-1 text-4xl lg:text-5xl font-bold tracking-tight text-blue-600">
                  {learnerStatsData.completedLessonCount}
                </dd>
              </div>
            </dl>
          )}
        </div>
      )}
    </>
  )
}

export default LearnerStats