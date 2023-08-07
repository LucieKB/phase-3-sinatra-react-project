puts "🌱 Seeding spices..."

Student.create([
    {
        first_name: "Agathe",
        last_name: "Matter",
        grade: 3
    },
    {
        first_name: "Emil",
        last_name: "Matter Kayser",
        grade: 6
    },
    {
        first_name: "Tristan",
        last_name: "Chérifi",
        grade: 4
    },
    {
        first_name: "Gabriel",
        last_name: "Chérifi Kayser",
        grade: 2
    },
    {
        first_name: "Pepito",
        last_name: "Mikorasso",
        grade: 10
    }  
])

goal_categories = ["Behavior", "Academic", "Social", "Other"]
goal_deadline = 30.day.from_now

    10.times do
     Goal.create(
        category: goal_categories.sample,
        deadline: goal_deadline,
        achieved: false,
        student_id: rand(0..4)
        )
    end


# Makes 10 students
# 10.times do
#     student = Student.create(
#       first_name: Faker::Student.first_name,
#       last_name: Faker::Student.last_name,
#       grade: rand(0..12)
#     )
# end

# Makes 10 goals
# goal_types = ["Behavior", "Academic", "Social", "Other"]
# goal_deadline = 30.day.from_now

# Goal.all.each do |goal|
#     10.times do
#      Goal.create(
#         type: goal_types.sample,
#         deadline: goal_deadline,
#         achieved: false,
#          student_id: student_id
#         )
#     end
# end


puts "✅ Done seeding!"

