from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

def tax(gross_income, extra_income, age, deduction):
    total_income = (gross_income+ extra_income)
    taxable_income=(gross_income+ extra_income)-deduction
    if taxable_income <= 800000:
        tax = 0
    else:
        if age == "<40":
            tax = (0.3*(taxable_income-800000))
        elif age == "≥40 & <60":
            tax=(0.4*(taxable_income-800000))
        elif age == ">60":
            tax = (0.1*(taxable_income-800000))
    return (total_income-tax), None
    

@app.route('/calculator', methods=['GET', 'POST'])
def calculator():
    if request.method == 'POST':
        gross_income = request.form['income']
        extra_income = request.form['extraIncome']
        age = request.form['age']
        deduction = request.form['deductions']
        tax_amount, error = tax(gross_income, extra_income, age, deduction)

        if tax_amount is not None:
            return f'Tax: {tax_amount:.2f}'
        else:
            return error

    return render_template('calculator.html')

if __name__ == "__main__":
    app.run(debug=True, port=8000)