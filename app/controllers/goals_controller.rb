class GoalsController < ApplicationController

    get '/goals' do
        goals = Goal.all
        goals.to_json
    end

    post '/goals' do
        student = Student.find_by(id: params[:student_id])
        goal = student.goals.create(params)
        goal.to_json
    end

    delete '/goals/:id' do
        goal = Goal.find_by(id: params[:id])
        dog.destroy
        goal.to_json
    end

end