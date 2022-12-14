<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
   xmlns:app="http://schemas.android.com/apk/res-auto"
   xmlns:tools="http://schemas.android.com/tools"
   android:layout_width="match_parent"
   android:layout_height="match_parent"
   tools:context=".MainActivity">
 
   <TextView
       android:id="@+id/tvEmail"
       android:layout_width="wrap_content"
       android:layout_height="wrap_content"
       android:text="Email"
       android:textSize="12sp"
       android:textColor="@color/textPopupEditTextColor"
       app:layout_constraintStart_toStartOf="parent"
       app:layout_constraintTop_toTopOf="parent"
       android:layout_margin="32dp"/>
 
   <EditText
       android:id="@+id/email"
       android:layout_width="match_parent"
       android:layout_height="wrap_content"
       android:layout_marginStart="30dp"
       android:layout_marginEnd="32dp"
       android:hint="john@gmail.com"
       android:layout_marginTop="5dp"
       app:layout_constraintEnd_toEndOf="parent"
       app:layout_constraintStart_toStartOf="@+id/tvEmail"
       app:layout_constraintTop_toBottomOf="@+id/tvEmail" />
 
   <TextView
       android:id="@+id/tvPassword"
       android:layout_width="wrap_content"
       android:layout_height="wrap_content"
       android:layout_marginTop="26dp"
       android:text="Password"
       android:textColor="@color/textPopupEditTextColor"
       android:textSize="12sp"
       app:layout_constraintStart_toStartOf="@+id/tvEmail"
       app:layout_constraintTop_toBottomOf="@id/email" />
 
   <EditText
       android:id="@+id/password"
       android:layout_width="match_parent"
       android:layout_height="wrap_content"
       android:layout_marginStart="30dp"
       android:layout_marginEnd="32dp"
       android:hint="*******"
       android:layout_marginTop="5dp"
       app:layout_constraintEnd_toEndOf="parent"
       app:layout_constraintStart_toStartOf="@+id/tvEmail"
       app:layout_constraintTop_toBottomOf="@+id/tvPassword" />
 
   <Button
       android:layout_width="wrap_content"
       android:layout_height="wrap_content"
       android:layout_marginTop="16dp" ,g
       app:layout_constraintEnd_toEndOf="@+id/password"
       app:layout_constraintTop_toBottomOf="@+id/pasSsword"
       android:text="sign in"/>
 
</androidx.constraintlayout.widget.ConstraintLayout>
