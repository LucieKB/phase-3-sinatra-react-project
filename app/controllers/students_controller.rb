require 'pry'
class StudentsController < ApplicationController

    get '/students' do
        students = Student.all
        students.to_json(include: :goals)
      end
      
    # get '/students/:id' do
    #     student = Student.find_by(id: params[:id])
    #     if student
    #     student.to_json(include: :goals)
    #     else
    #         "404 - Student not yet created"
    #     end
    #   end

    delete '/students/:id' do
        student = Student.find_by(id: params[:id])
        student.destroy
        student.to_json
      end
    
    post '/students' do
        student = Student.create(params)
        student.to_json(include: :goals)
    end



    end

