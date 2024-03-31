from rest_framework.viewsets import ModelViewSet
from ..models import Address
from .serializers import AddressSerializer

class AddresstViewsSet(ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer