var app = app || {};

(module => { 

    const tdeeView= {}

    const $view = $('#tdee-view')

    tdeeView.init = () => $view.show()

    $('#tdee-submit').one('click', (e) => {
        e.preventDefault()
        tdeeCalc()
    })

    tdeeCalc = function () {
        let sex = $('#sex').val()
        let age = $('#age').val()
        let height = $('#height').val()
        let weight = $('#weight').val()
        let bmr =
        console.log(sex, age, height, weight)
        if (sex === 'male') {
            bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)
        }
        else {
            bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)
        }
        console.log(bmr)
        let tdee = bmr * parseFloat($('#activityLevel').val())
        console.log(tdee)
        }

    module.tdeeView = tdeeView
    
})(app)