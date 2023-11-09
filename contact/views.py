from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import EmailMessage
from django.conf import settings

# Made you a contact form beforehand for implementing
@api_view(['POST'])
def contact(request):
  name = request.data['name']
  email_address = request.data['email']
  msg = request.data['msg']
  body = f'Name: {name}, Email: {email_address}, Message: {msg}'

  email = EmailMessage(
    'Jubefa: Contact',
    body,
    settings.EMAIL_HOST_USER,
    ['your email address'],
  )

  email.fail_silently = False

  try:
    email.send()

    return Response({ 'status': 200 })
  except Exception:
    return Response({ 'status': 400 })