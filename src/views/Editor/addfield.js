// import React from 'react'

// export class AddFields extends React.Component {
//     componentDidMount() {
//         // To disabled submit button at the beginning.
//         this.props.form.validateFields()
//     }
//     handleSubmit = e => {
//         e.preventDefault()
//         this.props.form.validateFields((err, values) => {
//             if (!err) {
//                 console.log('Received values of form: ', values)
//                 this.props.onSubmit(values)
//             }
//         })
//     }

//     render() {
//         const {
//             getFieldDecorator,
//             getFieldsError,
//             getFieldError,
//             isFieldTouched
//         } = this.props.form

//         // Only show error after a field is touched.
//         const userNameError = isFieldTouched('reps') && getFieldError('reps')
//         const passwordError =
//             isFieldTouched('weight') && getFieldError('weight')
//         return (
//             <div>
//                 <Form layout="inline" onSubmit={this.handleSubmit}>
//                     <FormItem
//                         validateStatus={userNameError ? 'error' : ''}
//                         help={userNameError || ''}
//                     >
//                         {getFieldDecorator('reps', {
//                             rules: [
//                                 { required: true, message: '请输入次数(数字)' }
//                             ]
//                         })(
//                             <Input
//                                 prefix={
//                                     <Icon
//                                         type="tag-o"
//                                         style={{ color: 'rgba(0,0,0,.25)' }}
//                                     />
//                                 }
//                                 placeholder="次数"
//                             />
//                         )}
//                     </FormItem>
//                     <FormItem
//                         validateStatus={passwordError ? 'error' : ''}
//                         help={passwordError || ''}
//                     >
//                         {getFieldDecorator('weight', {
//                             rules: [
//                                 { required: true, message: '请输入重量(数字)' }
//                             ]
//                         })(
//                             <Input
//                                 prefix={
//                                     <Icon
//                                         type="tag-o"
//                                         style={{ color: 'rgba(0,0,0,.25)' }}
//                                     />
//                                 }
//                                 placeholder="重量kg"
//                             />
//                         )}
//                     </FormItem>
//                     <FormItem>
//                         <Button
//                             type="primary"
//                             shape="circle"
//                             icon="plus"
//                             onClick={this.handleSubmit}
//                             disabled={hasErrors(getFieldsError())}
//                         />
//                     </FormItem>
//                 </Form>
//             </div>
//         )
//     }
// }
