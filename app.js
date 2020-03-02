let app = new Vue({
            el: '#app',
            data: {
                title: 'Compound Interest Calculator',
                principal: null,
                rate: null,
                numberOfTimes: null,
                time: null
            },

            computed: {
                result : function(){
                    // A = P (1 + r/n) (nt)
                    let rate = this.rate/100;
                    compoundInterest = this.principal * (1 + rate/this.time)**(this.time * this.numberOfTimes);
                    return compoundInterest.toFixed(2);

                }
            }
         });
